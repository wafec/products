import { AppBar, Box, Button, Icon, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export function Layout({children}: {children: React.ReactNode}) {
    return (
        <Box sx={{ padding: 2 }}>
            {children}
        </Box>
    )
}