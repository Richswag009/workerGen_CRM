import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ReactNode, useState } from "react";
import clsx from "clsx";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

type Props = {
    children: ReactNode
    title: string
}

export default function CustomAccordion({ children, title }: Props) {
    const [allExpanded, setAllExpanded] = useState(true);

    const toggleAll = () => {
        setAllExpanded((prev) => !prev);
    };
    return (

        <Accordion
            sx={{ boxShadow: '0 0 0 0', borderBottom: "none" }}
            expanded={allExpanded}
        >
            <div
                onClick={toggleAll}
            >
                <AccordionSummary
                    expandIcon={
                        allExpanded ?
                            <KeyboardArrowUpIcon sx={{ color: 'black' }} />
                            :
                            <KeyboardArrowDownIcon sx={{ color: 'black' }} />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                // sx={summaryStyle}
                >
                    <p className={clsx("text-sm font-bold")}>{title}</p>
                </AccordionSummary>
            </div>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>

    )
}