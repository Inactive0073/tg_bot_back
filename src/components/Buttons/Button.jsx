import React from 'react';

const Button = () => {
    return (
        <Button {...props} className={'button ' + props.className} />
    );
};

export default Button;