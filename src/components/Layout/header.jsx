export function Header() {
  return (
    <>
      <div className="bg-secondary-foreground h-[87px]  flex items-center">
        <div className="container flex direction-colum align-center justify-between">
          <div className="flex items-center">
            <div className="mr-12">
              <img src="/logo.svg" alt="" />
            </div>
            <a href="" className="text-secondary mr-6">
              Leilões de hoje
            </a>
            <a href="" className="text-secondary">
              Adicionados Recentemente
            </a>
          </div>
          <div className="flex items-center">
            <a href="" className="text-secondary mr-6">
              Cadastre o seu leilão
            </a>
            <a href="">
              <img src="/icon-world.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
