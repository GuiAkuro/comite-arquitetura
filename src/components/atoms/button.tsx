import { styled } from "stitches.config";

export const Button = styled('button', {

  border: 'none',
  color: '$white',
  borderRadius: '4px',

  variants: {
    style: {
      primary: {
        backgroundColor: '$primary'
      },
      accent: {
        backgroundColor: '$accent'
      }
    },

    size: {
      small: {
        padding: '4px 8px'
      },
      medium: {
        padding: '8px 16px'
      }
    }
  },

  defaultVariants: {
    style: "primary",
    size: "medium"
  }
})