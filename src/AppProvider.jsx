import { createContext, useContext, useState } from "react"
import TemplatePlain from "./slides/template/TemplatePlain";
import TemplatePlainPadded from "./slides/template/TemplatePlainPadded";
import TemplatePlainPhoto from "./slides/template/TemplatePlainPhoto";
import TemplatePlainClosing from "./slides/template/TemplatePlainClosing";
import TemplatePlainCover from "./slides/template/TemplatePlainCover";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [g_target_server_bahasa, setGTargetServerBahasa] = useState('en');
  const [g_content, setGContent] = useState({});

  const g_templates = {
    default        : TemplatePlain,
    default_padded : TemplatePlainPadded,
    default_photo  : TemplatePlainPhoto,
    default_closing: TemplatePlainClosing,
    default_cover  : TemplatePlainCover,
  }

  return (
    <AppContext.Provider value={{
      g_target_server_bahasa,
      setGTargetServerBahasa,
      g_content,
      setGContent,
      g_templates
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalState = () => {
  return useContext(AppContext);
};