import Image from "next/image"
function DividerItem(props) {
  return (
    <section className="pt-10 pb-10 px-10">
      <div className="pt-10 pb-10 px-10 flex-row justify-between">
        <div></div>
        <div></div>
      </div>
      <Image src={`${props.bag}`} width={500} height={500} />
      <div className='home'>
        <div><img src={`${props.logo}`} /></div>
        <div>{props.title}</div>
        <div>{props.desc}</div>
        <button>더 알아보기</button>
      </div>

      <div class="flex flex-col w-full">
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
        <div class="divider"></div>
        <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>


    </section>


  )

}

export default DividerItem;