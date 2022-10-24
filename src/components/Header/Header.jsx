import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import Button from '../Buttons/Button';

const Header = () => {

    const { user, onClose } = useTelegram();
    return (
        <Header className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </Header>
    )
}

export default Header;