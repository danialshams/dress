import { markup } from './markup';
import Interactions from './interactions';
export default function Home() { return <><div id="storefront" dangerouslySetInnerHTML={{__html:markup}}/><Interactions/></>; }
