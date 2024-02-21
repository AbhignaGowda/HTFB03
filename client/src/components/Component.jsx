import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="065666911f8ada9100e1f279dfa1000d" // You can get a client id from dashboard settings
    >
      <Component />
    </ThirdwebProvider>
  )
}

function Component() {
  const { contract, isLoading } = useContract("0x1fbd03AC59E8f951F93fEc93A534E618cFeFE6Da");
}
