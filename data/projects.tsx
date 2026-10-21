import type { Project } from "@/types";
import { CodeIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { AstroIcon, JSONIcon, TailwindCSSIcon, TypeScriptIcon, VisualStudioCodeIcon } from "@/components/atoms/icons";

export const projects: Project[] = [
  {
    id: "ks-sport",
    name: "Academia Deportiva",
    description:
      'La página web aun está en desarrollo para la academia Deportiva "ks Sport". Este proyecto buscaba informar y atraer a nuevos alumnos.',
    bannerUrl: "/poster/web.svg",
    stackTech: [],
    ctas: [
      {
        link: "https://github.com/papaconhuevo68-lgtm/ks-sport-academia",
        text: "Repository",
        variant: "secondary",
        icon: <CodeIcon />,
      },
    ],
  } satisfies Project,
 
  {
    id: "global-shapers",
    name: "Global Shapers Santander España",
    description:
      "Actualmente me encuentro de voluntaria con desarroladora front-end en Global Shapers Santander del foro economico mundial. ",
    bannerUrl: "/poster/admin.svg",
    stackTech: [],
    ctas: [
      {
        link: "https://globalshaperssantander.es/",
        text: "Global Shapers",
        variant: "default",
        icon: <ExternalLinkIcon />,
      },
    ],
  } satisfies Project,
  
];
