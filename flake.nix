{
  description = "AI: an industry of bottlenecks - GrizzlyBears";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "aarch64-darwin"
        "x86_64-linux"
      ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in
    {
      devShells = forAllSystems (
        system:
        let
          pkgs = import nixpkgs { inherit system; };
        in
        {
          default = pkgs.mkShell {
            packages = [
              pkgs.bun
              pkgs.typst
              pkgs.cm_unicode
              pkgs.marimo
              pkgs.python3
              pkgs.python3Packages.numpy
              pkgs.python3Packages.pandas
              pkgs.python3Packages.matplotlib
              pkgs.python3Packages.jupyter
              pkgs.python3Packages.seaborn
            ];
            TYPST_FONT_PATHS = "${pkgs.cm_unicode}/share/fonts";
            shellHook = ''
              echo "yoooo grizzly fkn bears!!!  ʕ•ᴥ•ʔ"
            '';
          };
        }
      );
    };
}
