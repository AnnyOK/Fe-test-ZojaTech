import React, { useState, useRef, ChangeEvent, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import emorji from '../assets/emorji.svg'
import microphone from '../assets/microphone.svg'
import file from '../assets/file.svg'
import camera from '../assets/camera.svg'
import send from '../assets/send.svg'
interface ChatAttachment {
    text: string;
    files: File[];
    audio: Blob | null;
}

const SendNewMessage: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const [recording, setRecording] = useState<boolean>(false);
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);



    // const videoRef = useRef<HTMLVideoElement>(null);
    // const canvasRef = useRef<HTMLCanvasElement>(null);
    // const [stream, setStream] = useState<MediaStream | null>(null);
    // const [photo, setPhoto] = useState<string | null>(null);
  
    // useEffect(() => {
    //   // Request camera access when component mounts
    //   const getCamera = async () => {
    //     try {
    //       const mediaStream = await navigator.mediaDevices.getUserMedia({
    //         video: true,
    //         audio: false, // set to true if recording audio
    //       });
    //       setStream(mediaStream);
    //       if (videoRef.current) {
    //         videoRef.current.srcObject = mediaStream;
    //       }
    //     } catch (err) {
    //       console.error('Error accessing camera:', err);
    //     }
    //   };
  
    //   getCamera();
  
    //   return () => {
    //     // Cleanup on unmount
    //     stream?.getTracks().forEach((track) => track.stop());
    //   };
    // }, []);
  
    // const takeSnapshot = () => {
    //   if (!canvasRef.current || !videoRef.current) return;
    //   const ctx = canvasRef.current.getContext('2d');
    //   if (!ctx) return;
  
    //   // Set canvas dimensions to video stream
    //   canvasRef.current.width = videoRef.current.videoWidth;
    //   canvasRef.current.height = videoRef.current.videoHeight;
    //   ctx.drawImage(videoRef.current, 0, 0);
    //   const imageData = canvasRef.current.toDataURL('image/png');
    //   setPhoto(imageData);
    // };
  

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    const handleEmojiClick = (emojiData: any): void => {
        setMessage((prev) => prev + emojiData.emoji);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.files) {
            setAttachedFiles((prev) => [...prev, ...Array.from(e.target.files)]);
        }
    };

    const handleStartRecording = async (): Promise<void> => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            mediaRecorderRef.current = recorder;
            audioChunksRef.current = [];

            recorder.ondataavailable = (event: BlobEvent) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            recorder.onstop = () => {
                const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
            };

            recorder.start();
            setRecording(true);
        } catch (err) {
            console.error('Audio recording failed:', err);
        }
    };

    const handleStopRecording = (): void => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    const handleSend = (): void => {
        const payload: ChatAttachment = {
            text: message.trim(),
            files: attachedFiles,
            audio: audioBlob,
        };

        console.log('Sending payload:', payload);
        // TODO: Send to backend

        // Reset state
        setMessage('');
        setAttachedFiles([]);
        setAudioBlob(null);
    };

    return (
        <div className="bg-[#D9D9D9] pl-8 py-6 pr-4 rounded-2xl border-t border-gray-300 flex items-center gap-2">
            <div className="w-full  h-fit relative ">
                {/* Text input */}
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write something..."
                    className="w-full px-10 py-2 rounded-full  bg-white resize-none"
                    rows={1}
                />

                {/* Emoji Picker */}
                {showEmojiPicker && (
                    <div className="absolute right-0 bottom-15 z-10">
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}

                {/* Action Buttons */}
                {/* <div className="flex items-center justify-between gap-2"> */}
                {/* <div className="flex items-center gap-3"> */}
                {/* Audio */}
                <div className='absolute left-[15px] top-2'>{!recording ? (
                    <button onClick={handleStartRecording} title="Start recording audio" type="button">
                        <img src={microphone} alt='' />
                    </button>
                ) : (
                    <button onClick={handleStopRecording} className="text-red-600" title="Stop recording" type="button">
                        <img src={microphone} alt='' />
                    </button>
                )}
                </div>


                <div className='flex absolute items-center right-2 top-2 gap-2 justify-evenly  '>
                    {/* File Upload */}
                    <label className="cursor-pointer ab" title="Attach file">
                        <img src={file} alt='' />
                        <input
                            type="file"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>

                    {/* Camera (photo capture) */}
                    <label className="cursor-pointer" title="Take a picture">
                        <img src={camera} alt=''/> 
                        <input
                            type="file"
                            accept="image/*.video/*"
                            capture="environment"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </label>
                    {/* Emoji */}
                    {/* <button
                        onClick={() => setShowEmojiPicker((prev) => !prev)}
                        className="text-xl bg-amber-600 !important p-0"
                        title="Add emoji"
                        type="button"
                    > */}
                        <img src={emorji} alt='' onClick={() => setShowEmojiPicker((prev) => !prev)}
                        className="text-xl  !important p-0"
                        title="Add emoji"/>
                    {/* </button> */}
                </div>
                {/* </div> */}

                {/* Send */}
               
            </div>
            <button
                    onClick={handleSend}
                    className=" rounded  disabled:opacity-40"
                    disabled={!message.trim() && attachedFiles.length === 0 && !audioBlob}
                    type="button"
                >
                    <img src={send} alt='' />
                </button>
            {/* File Preview */}
            {attachedFiles.length > 0 && (
                <div className="text-sm text-gray-700">
                    Attached: {attachedFiles.map((file) => file.name).join(', ')}
                </div>
            )}

            {/* Audio Preview */}
            {audioBlob && (
                <audio controls className="mt-2">
                    <source src={URL.createObjectURL(audioBlob)} type="audio/webm" />
                </audio>
            )}
            {/* </div> */}
        </div>
    );
};

export default SendNewMessage;
