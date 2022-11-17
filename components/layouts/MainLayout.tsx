import { FC, ReactNode } from "react"
import Head from "next/head"
import Box from "@mui/material/Box"
import { Sidebar } from "../sidebar";
import InboxIcon from '@mui/icons-material/MoveToInbox';

import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import { Navbar } from "../navbar";

interface Props {
    children: ReactNode;
    title: string;
}

export const MainLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Navbar />

            <Sidebar >
                <Sidebar.Section>
                    <Sidebar.Item title="Example" Icon={<InboxIcon />} options={false} />
                </Sidebar.Section>

                <Sidebar.Section>
                    <Sidebar.Item title="Servicio al cliente" Icon={<EmojiPeopleOutlinedIcon />} options={["Presentacion", "ALgo"]} />
                </Sidebar.Section>

                <Sidebar.Section>
                    <Sidebar.Item title="Modulo 2" Icon={<EmojiPeopleOutlinedIcon />} options={["COmposiscion", "Notas"]} />
                </Sidebar.Section>

                <Sidebar.Section>
                    <Sidebar.Item title="Modulo 3" Icon={<EmojiPeopleOutlinedIcon />} options={["Caarpetas", "Notas"]} />
                </Sidebar.Section>
            </Sidebar>


            <Box mt={8}>
                {children}
            </Box>
        </>
    )
}