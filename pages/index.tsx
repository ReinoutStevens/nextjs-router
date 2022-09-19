import { useRouter } from "next/router"

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const router = useRouter();

  const brokenClick = () => {
    router.push('http://localhost.com:3000/foo'); // note the .com part
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
