import { ConfLine } from "../types.ts";
import Button from "./Button.tsx";
import { useState } from "preact/hooks";
import IconClipboardCopy from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/clipboard-copy.tsx";

let confString = "";

const convertConfObjectToString = (conf: ConfLine[]) => {
  let result = "";
  conf.forEach((line) => {
    result += `${line.name}=${line.value}
`;
  });
  return result;
};

export default function ModalEnv({ conf }: { conf: ConfLine[] }) {
  confString = convertConfObjectToString(conf);

  const [btnCopyText, setBtnCopyText] = useState<string>("Copy");
  const copyEnv = () => {
    navigator.clipboard.writeText(confString);
    setBtnCopyText("Copied!");
    setTimeout(() => {
      setBtnCopyText("Copy");
    }, 2000);
  };

  return (
    <div id="modalEnv" class="min-w-[250px]">
      <div class="p-4 rounded bg-[#F8F7F6] mb-4" style={"font-size: 14px"}>
        <ul>
          {conf.map((line) => (
            <li>
              <span>{line.name}={line.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div class="flex gap-4">
        <Button fullwidth onClick={copyEnv}>
          <span class="flex items-center justify-center gap-2">
            <IconClipboardCopy class="w-5 h-5" />
            {btnCopyText}
          </span>
        </Button>
      </div>
    </div>
  );
}
