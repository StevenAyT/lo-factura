import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Head from "next/head";
import { FC, ReactNode } from "react";
import { sidebarOptions } from "../../const";
import { Navbar } from "../navbar";
import { Sidebar } from "../sidebar";

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
                    <Sidebar.Item title="Servicio al cliente" Icon={<EmojiPeopleOutlinedIcon />}
                        options={sidebarOptions} />
                </Sidebar.Section>
            </Sidebar>

            <div style={{ marginTop: 50 }}>
                {children}
            </div>
        </>
    )
}