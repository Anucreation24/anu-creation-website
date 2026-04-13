"use client";

import { 
  Palette, 
  Clapperboard, 
  Film, 
  Mic, 
  Megaphone, 
  Rocket, 
  Camera, 
  Image as ImageIcon, 
  PenTool, 
  MonitorPlay, 
  Brush, 
  LayoutGrid, 
  Sparkles, 
  Briefcase 
} from "lucide-react";

interface ServiceIconProps {
  name?: string | null;
  size?: number;
  className?: string;
}

const iconMap: Record<string, any> = {
  palette: Palette,
  clapperboard: Clapperboard,
  film: Film,
  mic: Mic,
  megaphone: Megaphone,
  rocket: Rocket,
  camera: Camera,
  image: ImageIcon,
  "pen-tool": PenTool,
  "monitor-play": MonitorPlay,
  brush: Brush,
  "layout-grid": LayoutGrid,
  sparkles: Sparkles,
  briefcase: Briefcase,
};

export default function ServiceIcon({ name, size = 18, className = "" }: ServiceIconProps) {
  const Icon = (name ? iconMap[name.toLowerCase()] : null) || Palette;
  return <Icon size={size} className={className} />;
}
