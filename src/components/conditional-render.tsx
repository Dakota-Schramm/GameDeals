
/**
 * @name ConditionalRender
 *
 * @param {object} props
 *
 * @return {React.ReactElement}
 */

import { breakpoints as tw } from '../utils/tailwindBreakpoints';

export interface ConditionalRenderProps {
  width: number | undefined
  mobile: JSX.Element;
  desktop: JSX.Element;
}
 
const ConditionalRender: React.FunctionComponent<ConditionalRenderProps> = ({
  width, 
  mobile,
  desktop
}: ConditionalRenderProps) => {
  if (!width) return null;
  return width < tw.lg ? mobile : desktop;
};
 
export default ConditionalRender;
 