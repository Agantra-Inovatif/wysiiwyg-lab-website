import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', label: 'English' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'zh', label: '中文' },
  { code: 'ja', label: '日本語' },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={i18n.language === lang.code ? "bg-accent text-accent-foreground" : ""}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
