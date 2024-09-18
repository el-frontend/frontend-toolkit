import { spawn } from "child_process";

export function cmd(command: string, showOutput = true) {
  return new Promise((resolve, reject) => {
    const p = spawn(command, { shell: true, stdio: "inherit", detached: true  });

    p.stdout?.on("data", function (data) {
      if (showOutput) console.log("stdout: " + data.toString());
    });

    p.stderr?.on("data", function (data) {
      reject(data.toString());
    });

    p.on("exit", function (code) {
      resolve(code);
    });
  });
}
