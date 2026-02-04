import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { getCurrentWindow, LogicalPosition } from "@tauri-apps/api/window";

const MARGIN = 10;

async function dockBottomLeft() {
  const win = getCurrentWindow();

  await win.setAlwaysOnTop(true);

  const monitor = await win.currentMonitor();
  if (!monitor) return;

  const size = await win.outerSize();

  const x = monitor.position.x + MARGIN;
  const y = monitor.position.y + monitor.size.height - size.height - MARGIN;

  await win.setPosition(new LogicalPosition(x, y));
}

window.addEventListener("DOMContentLoaded", () => {
  dockBottomLeft();
});

createApp(App).mount("#app");
