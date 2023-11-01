export default function Typography() {

  return (
    <div>
      <h2 className="text-3xl p-4">Typography</h2>
      <div className="flex justify-between p-6">
        {/* Type Scale */}
        <div className="space-y-6">
          <h2 className="text-2xl mb-6 border-b w-[50%]">
            Type Scale
          </h2>
          <p className="text-sm">
            We follow a 6px baseline grid for achieving a vertical rhythm on all block-level elements in the app.
          </p>

          <div className="space-y-4">
            <h1 className="text-4xl font-cooper">
              Heading One <span className="text-base ml-4 font-normal">44px / 48px</span>
            </h1>
            <hr />

            <h2 className="text-3xl font-graphik">
              Heading Two <span className="text-base ml-4 font-normal">36px / 45px</span>
            </h2>
            <hr />

            <h3 className="text-2xl font-graphik">
              Heading Three <span className="text-base ml-4 font-normal">28px / 35px</span>
            </h3>
            <hr />

            <h4 className="text-xl font-graphik">
              Heading Four <span className="text-base ml-4 font-normal">20px / 25px</span>
            </h4>
            <hr />

            <div className="text-lg font-graphik-medium">
              Body Bold <span className="text-base ml-4 font-normal">16px / 24px</span>
            </div>
            <hr />

            <div className="text-lg font-graphik">
              Body <span className="text-base ml-4 font-normal">16px / 24px</span>
            </div>
            <hr />

            <div className="text-base font-graphik-medium">
              Button & Meta <span className="text-base ml-4 font-normal">14px / 24px</span>
            </div>
          </div>
        </div>

        {/* Font Style */}
        <div className="w-1/2 pl-6 border-l">
          <h2 className="text-2xl mb-6 border-b w-[50%]">Font Style</h2>

          <div className="flex">
            {/* Sans Serif - Lexend Deca */}
            <div className="w-1/2 space-y-4">
              <h3 className="mb-2">Sans Serif | Lexend Deca</h3>
              <div className="mb-4">
                <h2 className="mb-2">Lexend Deca Light</h2>
                <p className="font-sans font-light">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-sans font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
              <div className="mb-4">
                <h2 className="mb-2">Lexend Deca Regular</h2>
                <p className="font-sans">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-sans">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
              <div className="mb-4">
                <h2 className="mb-2">Lexend Deca Medium</h2>
                <p className="font-sans font-medium">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-sans font-medium">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
              <div>
                <h2 className="mb-2">Lexend Deca Semibold</h2>
                <p className="font-sans font-semibold">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-sans font-semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
            </div>

            {/* Serif - Queens */}
            <div className="w-1/2 space-y-4">
              <h3 className="mb-2">Serif | Queens</h3>
              <div className="mb-4">
                <h2 className="mb-2">Queens Medium</h2>
                <p className="font-serif font-medium">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-serif font-medium">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
              <div className="mb-4">
                <h2 className="mb-2">Queens Bold</h2>
                <p className="font-serif font-bold">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-serif font-bold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
              <div>
                <h2 className="mb-2">Queens Extra Bold</h2>
                <p className="font-serif font-extrabold">abcdefghijklmnopqrstuvwxyz</p>
                <p className="font-serif font-extrabold">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

