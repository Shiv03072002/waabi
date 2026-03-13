export default function ImageLayout() {
  return (
    <section className="py-24 bg-white flex justify-center">
      <div className="w-full px-6 space-y-10">

        {/* Top Big Image */}
        <div className="rounded-2xl overflow-hidden h-200">
          <img
            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cards Row */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl overflow-hidden h-[600px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-[600px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          <div className="rounded-2xl overflow-hidden h-[600px] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=1200"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>

        {/* Bottom Big Image */}
        <div className="rounded-2xl overflow-hidden h-200">
          <img
            src="https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1600"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}