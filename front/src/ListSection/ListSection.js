import React, {useState, useEffect} from "react";
import "./ListSection.scss";
import SectionItem from "../SectionItem/SectionItem";

function ListSection() {
    const [list_section_item, set_list_section_item] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3333/sections")
        .then(response => response.json())
        .then(data => {
            data = data.map((item, i) => {
                item.active = i === 0;
                return item;
            });
            console.log(data)
            set_list_section_item(data);
        })
        .catch(e => console.log(e.message));
    }, []);

    const mapped_list_section = list_section_item.map((section_item, i) => {
        return (
            <div key={i}>
                <SectionItem {...section_item} />
            </div>
        );
    });

    return (
        <div className="list-section">
            {mapped_list_section}
        </div>
    );
}

export default ListSection;