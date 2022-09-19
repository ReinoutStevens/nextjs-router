import { useRouter } from "next/router"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const router = useRouter();

  const brokenClick = () => {
    // note the .com part
    // localhost doesnt reproduce the error though, as the router will include the :3000
    // in production example.com vs example.com.br does reproduce the error

    // in prepareUrlAs the offending line is
    //     const hrefHadOrigin = resolvedHref.startsWith(origin);
    router.push('http://localhost.com:3000/foo'); 
  }

  const workingClick = () => {
    router.push('http://localhost:3000/foo');
  }

  const workingExternalClick = ()=> {
    router.push('http://www.google.com');
  }

  return (
  <div>
    <button onClick={workingClick}>Internal</button>
    <button onClick={workingExternalClick}>External</button>
    <button onClick={brokenClick}>Broken</button>
    </div>
    )
    
}
