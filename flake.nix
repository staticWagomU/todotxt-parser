{
  description = "todotxt-parser development environment with Bun";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            bun
            nodejs_22
          ];

          shellHook = ''
            echo "🥟 Bun $(bun --version) ready!"
            echo "📦 Node.js $(node --version) available for compatibility"
          '';
        };
      }
    );
}
