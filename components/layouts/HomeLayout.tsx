import Paper from "@mui/material/Paper";
import Head from "next/head"
import { FC, ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string
}

export const HomeLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Paper sx={{ height: "100vh" }}>
                {children}
            </Paper>
        </>
    )
}
