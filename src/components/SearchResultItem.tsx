import * as React from "react";
import { ItemData, getHighlightedText } from "../LibraryUtilities";
import { LibraryView } from "../LibraryView";

interface SearchResultItemProps {
    data: ItemData;
    libraryView: LibraryView;
    category: string;
    highlightedText: string;
}

interface SearchResultItemStates { }

export class SearchResultItem extends React.Component<SearchResultItemProps, SearchResultItemStates> {

    constructor(props: SearchResultItemProps) {
        super(props);
    }

    render() {
        let iconPath = this.props.data.iconUrl;
        let highLightedItemText = getHighlightedText(this.props.data.text, this.props.highlightedText);
        let highLightedCategoryText = getHighlightedText(this.props.category, this.props.highlightedText);
        let ItemTypeIconPath = "src/resources/icons/library-" + this.props.data.itemType + ".svg"

        return (
            <div className={"SearchResultItemContainer"} onClick={this.onItemClicked.bind(this)}>
                <img className={"ItemIcon"} src={iconPath} />
                <div className={"ItemInfo"}>
                    <div className={"ItemTitle"}>{highLightedItemText}</div>
                    <div className={"ItemDetails"}>
                        <img className={"ItemTypeIcon"} src={ItemTypeIconPath} />
                        <div className={"ItemCategory"}>{highLightedCategoryText}</div>
                    </div>
                </div>
            </div>
        )
    }

    onItemClicked() {
        this.props.libraryView.raiseEvent("itemClicked", this.props.data.contextData);
    };
}