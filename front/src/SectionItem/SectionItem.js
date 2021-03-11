import React from "react";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon as Icon} from "@fortawesome/react-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import "./SectionItem.scss";
library.add(fas);

function SectionItem({icon, name, active}) {
    const cn_section_item = active ? "section-item section-item--active" : "section-item";
    return (
        <div className={cn_section_item}>
            <Icon className="icon" icon={icon} />
            <p className="app-text name">{name}</p>
            <div className="underline"></div>
        </div>
    )
}

export default SectionItem;