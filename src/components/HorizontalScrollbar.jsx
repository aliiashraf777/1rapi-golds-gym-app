import { Box, Typography } from "@mui/material"
import BodyParts from "./BodyParts"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { useContext } from "react";
import { leftArrow, rightArrow } from "../assets/icons";


// left right arrow
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
            <img src={leftArrow} alt="right-arrow" />
        </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={rightArrow} alt="right-arrow" />
        </Typography>
    );
};

const HorizontalScrollbar = ({ data, selectedBodyPart, setSelectedBodyPart }) => {
    return (
        <ScrollMenu
            // wrapperClassName="scroll-menu-wrapper"
            // itemClassName="scroll-menu-item"
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
        >
            {data.map((item) => (
                <Box
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                    m='10px 10px'
                    sx={{border: '2px solid blackx'}}
                >
                    {/* {console.log('horizontal items from search', item)}; */}

                    <BodyParts
                        item={item}
                        selectedBodyPart={selectedBodyPart}
                        setSelectedBodyPart={setSelectedBodyPart}
                    />
                </Box>
            ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollbar
