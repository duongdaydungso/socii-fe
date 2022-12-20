import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { BsEmojiSmile } from "react-icons/bs";
import Picker from "@emoji-mart/react";

const ShareDialog = () => {
  const [input, setInput] = useState("");

  const [showEmojis, setShowEmojis] = useState(false);

  const sendShare = () => {
    console.log("send");
  };

  const user = {
    name: "Elon Ma",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=256&h=256&q=80",
  };

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  return (
    <div className="border-layout mr-3 flex space-x-5 border-b py-5 dark:bg-dark dark:text-white">
      <img
        className="ml-6 flex h-14 cursor-pointer rounded-full"
        src={user.avatar}
        alt="prof"
      />
      <div className="flex w-[80%] flex-col">
        <div className="flex w-full">
          <TextareaAutosize
            minRows={1}
            maxRows={8}
            className="my-2 w-[90%] resize-none bg-inherit pb-4 text-2xl font-semibold outline-none dark:text-white"
            placeholder="Share..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <div
            onClick={() => setShowEmojis(!showEmojis)}
            className="hoverAnimation group mt-1 flex h-8 w-8 items-center justify-center"
          >
            <BsEmojiSmile className="h-5 w-5 group-hover:text-accent" />
          </div>

          {showEmojis && (
            <div className="absolute z-50 mx-auto mt-9 xs:ml-[90px]">
              <Picker autoFocus onEmojiSelect={addEmoji} theme="dark" />
            </div>
          )}
        </div>

        <div className="w-[85%] bg-red-200">PUT THAT POST HERE</div>
        <div>
          <button
            disabled={!input}
            onClick={sendShare}
            className="post-btn-transition mt-4 h-10 w-[20%] rounded-full bg-accentLight hover:cursor-pointer disabled:opacity-50"
          >
            <span className="font-bold text-white">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareDialog;
