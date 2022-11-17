import { SidebarItemProps } from '../interfaces';
import { ItemSimple, ItemOptions } from './';

export const SidebarItem = (props: SidebarItemProps) => {

    return (
        <>
            {props.options === false ? <ItemSimple {...props} /> : <ItemOptions {...props} />}
        </>
    )
}