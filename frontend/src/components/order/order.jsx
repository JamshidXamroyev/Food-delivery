import { useSelector } from "react-redux"

const Order = () => {
    const {ammount} = useSelector(state => state.food)
  return (
    <section className="my-8 flex justify-between items-start gap-16 md:pt-20 max-md:flex-col">
        <div className="md:w-1/2 w-full px-2">
            <h1 className="md:text-4xl text-2xl font-bold my-5">Delivery information</h1>
            <form className="w-full flex flex-col gap-3">
                <div className="w-full flex justify-between gap-3">
                    <input type="text" placeholder="First name" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                    <input type="text" placeholder="Last name" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                </div>
                <input type="email" placeholder="Email adress" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                <input type="text" placeholder="Street" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                <div className="w-full flex justify-between gap-3">
                    <input type="text" placeholder="City" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                    <input type="text" placeholder="State" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                </div>
                <div className="w-full flex justify-between gap-3">
                    <input type="number" placeholder="Zip Code" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                    <input type="text" placeholder="Country" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
                </div>
                <input type="number" placeholder="Phone" className="w-full py-2 px-3 rounded-sm font-semibold outline-none border focus:border-orange-600 border-black"/>
            </form>
        </div>

        <div className="md:w-1/2 w-full px-2">
                <h2 className="text-2xl font-bold font-Title my-5">Cart Total</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center border-b">
                        <p>Subtotal</p>
                        <p>{ammount}$</p>
                    </div>

                    <div className="flex justify-between items-center border-b">
                        <p>Delivery Fee</p>
                        <p>{ammount !== 0 ? 2 : 0}$</p>
                    </div>

                    <div className="flex justify-between items-center border-b">
                        <b>Total</b>
                        <b>{ammount !== 0 ? ammount + 2 : 0}$</b>
                    </div>
                </div>
                <button className="w-full py-1.5 my-2 rounded-sm bg-orange-500 active:bg-orange-800 text-white">Procced To Checkout</button>
            </div>
    </section>
  )
}

export default Order