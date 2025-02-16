import { useState } from 'react'

export default function App() {
  const [buyPrice, setBuyPrice] = useState<number>(0)
  const [buyQuantity, setBuyQuantity] = useState<number>(0)
  const [sellPrice, setSellPrice] = useState<number>(0)
  const [sellQuantity, setSellQuantity] = useState<number>(0)

  // 購入総額と売却総額、利益を計算
  const totalBuyAmount = buyPrice * buyQuantity
  const totalSellAmount = sellPrice * sellQuantity
  const profit = totalSellAmount - totalBuyAmount

  return (
    <>
    <main className="container mx-auto max-w-screen-md border p-4">
      <h1 className="text-3xl font-bold text-center mb-6">あつまれどうぶつの森 カブ収益計算</h1>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">購入時に入力</h2>
        <h3 className="mb-2">購入時のカブ価と購入数</h3>
        <div className="flex gap-4 mb-2">
          <input
            type="number"
            value={buyPrice}
            onChange={(e) => setBuyPrice(Number(e.target.value))}
            placeholder="カブ価"
            className="border p-2"
          />
          <input
            type="number"
            value={buyQuantity}
            onChange={(e) => setBuyQuantity(Number(e.target.value))}
            placeholder="購入数"
            className="border p-2"
          />
        </div>
        <p>購入総額: {totalBuyAmount.toLocaleString()}ベル</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">売却時に入力</h2>
        <h3 className="mb-2">売却時のカブ価と売却数</h3>
        <div className="flex gap-4 mb-2">
          <input
            type="number"
            value={sellPrice}
            onChange={(e) => setSellPrice(Number(e.target.value))}
            placeholder="カブ価"
            className="border p-2"
          />
          <input
            type="number"
            value={sellQuantity}
            onChange={(e) => setSellQuantity(Number(e.target.value))}
            placeholder="売却数"
            className="border p-2"
          />
        </div>
        <p>売却総額: {totalSellAmount.toLocaleString()}ベル</p>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">売却益</h3>
        <p className={`text-lg ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {profit.toLocaleString()}ベル
        </p>
      </div>
    </main>
    </>
  )
}
