import { createContext, useContext, useState } from "react"
import TemplatePlain from "./slides/template/TemplatePlain";
import TemplatePlainPadded from "./slides/template/TemplatePlainPadded";
import TemplatePlainPhoto from "./slides/template/TemplatePlainPhoto";
import TemplatePlainClosing from "./slides/template/TemplatePlainClosing";
import TemplatePlainCover from "./slides/template/TemplatePlainCover";
import LunaCoverFloatingSide from "./slides/template/LunaCoverFloatingSide";
import LunaCoverHeadlineFoot from "./slides/template/LunaCoverHeadlineFoot";
import LunaCoverFloating from "./slides/template/LunaCoverFloating";
import LunaCoverHeadline from "./slides/template/LunaCoverHeadline";
import LunaClosingHead from "./slides/template/LunaClosingHead";
import LunaClosingFoot from "./slides/template/LunaClosingFoot";
import LunaContentBasic from "./slides/template/LunaContentBasic";
import LunaContentIndent from "./slides/template/LunaContentIndent";
import LunaContentAside from "./slides/template/LunaContentAside";
import LunaContentPadded from "./slides/template/LunaContentPadded";
import LunaContentPortrait from "./slides/template/LunaContentPortrait";
import LunaContentDouble from "./slides/template/LunaContentDouble";
import LunaContentPhoto from "./slides/template/LunaContentPhoto";
import LunaReflectionPhoto from "./slides/template/LunaReflectionPhoto";
import LunaReflectionPadded from "./slides/template/LunaReflectionPadded";
import LunaReflectionIndent from "./slides/template/LunaReflectionIndent";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [g_target_server_bahasa, setGTargetServerBahasa] = useState('en');
  const [g_content, setGContent] = useState({});

  const g_templates = {
    cover_floating      : LunaCoverFloating,
    cover_floating_side : LunaCoverFloatingSide,
    cover_headline      : LunaCoverHeadline,
    cover_headline_foot : LunaCoverHeadlineFoot,
    closing_head     : LunaClosingHead,
    closing_foot     : LunaClosingFoot,
    content_basic    : LunaContentBasic,
    content_indent   : LunaContentIndent,
    content_aside    : LunaContentAside,
    content_padded   : LunaContentPadded,
    content_portrait : LunaContentPortrait,
    content_double   : LunaContentDouble,
    content_photo    : LunaContentPhoto,
    reflection_photo : LunaReflectionPhoto,
    reflection_padded: LunaReflectionPadded,
    reflection_indent: LunaReflectionIndent,
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