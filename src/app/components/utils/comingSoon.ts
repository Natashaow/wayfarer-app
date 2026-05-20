import { toast } from "sonner";

export function showComingSoon(feature = "AI trip planning") {
  toast.dismiss();
  toast(`${feature} is coming soon`, {
    description: "We're polishing this experience — check back shortly.",
    duration: 3000,
  });
}
