import React, {useEffect} from 'react';

type PropsType = {
    title: string
    children: JSX.Element
}

const Page: React.FC<PropsType> = ({title, children}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return children;
};

export default Page;