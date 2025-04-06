import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export function BreadcrumbHome({current}: {current: string}) {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Principal
                </Link>
                <Typography sx={{ color: 'text.primary' }}>{current}</Typography>
            </Breadcrumbs>
        </Box>
    )
}