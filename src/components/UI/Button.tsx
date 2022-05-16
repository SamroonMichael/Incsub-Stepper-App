import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

const Button = ({ className, onClick, children, disabled }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick} type="button" disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
