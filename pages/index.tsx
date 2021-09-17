import { NextPage } from 'next'
import { getRequestInstance } from "../modules/request";
 
const Page: NextPage = ({ data }:any) => {
   return data.map(
      (d: any, index:number) => <div key={index}>{index}番目のデータ: {d.any_column}</div>
   )
}
Page.getInitialProps = async (ctx: any) => {
	const request = getRequestInstance(Boolean(ctx.req));
	const res = await request.get("data").then(res => res);
	return res.data;
}
export default Page