import { createContext, useContext, useState } from "react"
import TemplatePlain from "./slides/template/TemplatePlain";
import TemplatePlainPadded from "./slides/template/TemplatePlainPadded";
import TemplatePlainPhoto from "./slides/template/TemplatePlainPhoto";
import TemplatePlainClosing from "./slides/template/TemplatePlainClosing";
import TemplatePlainCover from "./slides/template/TemplatePlainCover";
import DailyUpdateCoverFloatingSide from "./slides/template/DailyUpdateCoverFloatingSide";
import DailyUpdateCoverHeadlineFoot from "./slides/template/DailyUpdateCoverHeadlineFoot";
import DailyUpdateCoverFloating from "./slides/template/DailyUpdateCoverFloating";
import DailyUpdateCoverHeadline from "./slides/template/DailyUpdateCoverHeadline";
import DailyUpdateClosingHead from "./slides/template/DailyUpdateClosingHead";
import DailyUpdateClosingFoot from "./slides/template/DailyUpdateClosingFoot";
import DailyUpdateContentBasic from "./slides/template/DailyUpdateContentBasic";
import DailyUpdateContentIndent from "./slides/template/DailyUpdateContentIndent";
import DailyUpdateContentAside from "./slides/template/DailyUpdateContentAside";
import DailyUpdateContentPadded from "./slides/template/DailyUpdateContentPadded";
import DailyUpdateContentPortrait from "./slides/template/DailyUpdateContentPortrait";
import DailyUpdateContentDouble from "./slides/template/DailyUpdateContentDouble";
import DailyUpdateContentPhoto from "./slides/template/DailyUpdateContentPhoto";
import DailyUpdateReflectionPhoto from "./slides/template/DailyUpdateReflectionPhoto";
import DailyUpdateReflectionPadded from "./slides/template/DailyUpdateReflectionPadded";
import DailyUpdateReflectionIndent from "./slides/template/DailyUpdateReflectionIndent";

const AppContext = createContext();

export default function AppProvider({ children }) {
  const [g_target_server_bahasa, setGTargetServerBahasa] = useState('en');
  const [g_content, setGContent] = useState({});

  const g_templates = {
    cover_floating      : DailyUpdateCoverFloating,
    cover_floating_side : DailyUpdateCoverFloatingSide,
    cover_headline      : DailyUpdateCoverHeadline,
    cover_headline_foot : DailyUpdateCoverHeadlineFoot,
    closing_head     : DailyUpdateClosingHead,
    closing_foot     : DailyUpdateClosingFoot,
    content_basic    : DailyUpdateContentBasic,
    content_indent   : DailyUpdateContentIndent,
    content_aside    : DailyUpdateContentAside,
    content_padded   : DailyUpdateContentPadded,
    content_portrait : DailyUpdateContentPortrait,
    content_double   : DailyUpdateContentDouble,
    content_photo    : DailyUpdateContentPhoto,
    reflection_photo : DailyUpdateReflectionPhoto,
    reflection_padded: DailyUpdateReflectionPadded,
    reflection_indent: DailyUpdateReflectionIndent,
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
