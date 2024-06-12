import { redirect } from "next/navigation";

export default function Start() {
  return redirect("admin/home") ?? "start";
}
