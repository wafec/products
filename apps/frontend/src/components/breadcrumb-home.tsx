import { Box, Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router";

export function BreadcrumbHome({current}: {current: string}) {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">
                    Principal
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{current}</Typography>
            </Breadcrumbs>
        </Box>
    )
}