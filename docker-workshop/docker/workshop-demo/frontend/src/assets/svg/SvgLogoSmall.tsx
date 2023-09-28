import { SvgProps } from '@interface'
import { colors } from '@variables'
import { FunctionComponent } from 'react'

export const SvgLogoSmall: FunctionComponent<SvgProps> = ({
  fill,
  height,
  width
}) => {
  const pathFill = fill || colors.grayscale.x400
  const pathWidth = width || 24
  const pathHeight = height || 32

  return (
    <svg
      width={pathWidth}
      height={pathHeight}
      fill={pathFill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 15.926c0-5.938-4.48-10.849-10.228-11.501V0h-2.6v6.967h1.298a8.91 8.91 0 0 1 6.055 2.411 8.987 8.987 0 0 1 .885 12.145 8.921 8.921 0 0 1-5.641 3.27v-3.084a5.906 5.906 0 0 0 3.504-2.345 5.946 5.946 0 0 0-.87-7.852 5.894 5.894 0 0 0-3.933-1.515l-6.854.07v14.82H2.604V6.965H8.23V0H5.625v4.353H0V27.5h5.625V32H8.23V12.655l4.248-.044c.875 0 1.715.35 2.335.971a3.321 3.321 0 0 1 0 4.688c-.62.622-1.46.971-2.335.971h-1.3V32h2.605v-4.574C19.52 26.773 24 21.865 24 15.926Z"
        fill={pathFill}
      />
    </svg>
  )
}
