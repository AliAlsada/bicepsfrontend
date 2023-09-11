import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/app/utils/utils";



type ButtonProps = {
    variant: any;
    size: any;
    className: any,
    text: any,
    onClick: any,

}

const buttonVariants = cva(
    ['inline-flex items-center justify-center text-sm font-medium font-bold'],

    {
        variants: {
            variant: {
                default:
                    'bg-base-200 text-gray hover:bg-base-300',
                active:
                    'bg-primary text-white hover:bg-primary-focus',
            },
            size: {
                default: 'h-12 px-4 gap-2 leading-5 text-sm',
                sm: 'h-9 px-2 rounded-md',
                lg: 'h-11 px-8 rounded-md',
            },

            defaultVariants: {
                variant: 'default',
                size: 'default',
            },
        },
    }
)

export const Button: React.FC<ButtonProps> = ({ className, variant, size, text, onClick, ...props }) => {
    return (
        <label className={cn(buttonVariants({ variant, size, className }))} onClick={onClick}> {text} </label>
    )
}