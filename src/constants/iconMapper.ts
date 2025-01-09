import FileIcon from "@/components/icon/FileIcon";
import FolderIcon from "@/components/icon/FolderIcon";
import GameIcon from "@/components/icon/GameIcon";
import GithubIcon from "@/components/icon/GithubIcon";
import InternetIcon from "@/components/icon/InternetIcon";
import LinkedInIcon from "@/components/icon/LinkedInIcon";
import PDFIcon from "@/components/icon/PDFIcon";
import TerminalIcon from "@/components/icon/TerminalIcon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const iconMapper: Record<string, any> = {
  folder: FolderIcon,
  file: FileIcon,
  exe: TerminalIcon,
  linkedin: LinkedInIcon,
  github: GithubIcon,
  pdf: PDFIcon,
  internet: InternetIcon,
  game: GameIcon,
};
