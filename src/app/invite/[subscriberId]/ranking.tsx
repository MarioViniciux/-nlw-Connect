import Image from 'next/image'
import Medal_Gold from '../../../assets/Medal_Gold.svg'
import Medal_Silver from '../../../assets/Medal_Silver.svg'
import Medal_Bronze from '../../../assets/Metal_Bronze.svg'
import { getRanking } from '@/http/api'

export async function Ranking() {

  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 leading-none font-heading font-semibold text-xl">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankingPosition = index + 1

          return (
            <div key={item.id} className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
              <span className="text-sm leading-none text-gray-200">
                <span className="font-semibold">{rankingPosition}°</span> | {item.name}
              </span>
    
              <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
                {item.score}
              </span>

              { rankingPosition === 1 && (<Image src={Medal_Gold} alt="" className="absolute top-0 right-8" />)}
              { rankingPosition === 2 && (<Image src={Medal_Silver} alt="" className="absolute top-0 right-8" />)}
              { rankingPosition === 3 && (<Image src={Medal_Bronze} alt="" className="absolute top-0 right-8" />)}
            </div>
          )
        })}
      </div>

    </div>
  )
}
