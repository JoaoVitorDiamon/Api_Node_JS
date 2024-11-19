CREATE TABLE IF NOT EXISTS "Endereco" (
	"id" text PRIMARY KEY NOT NULL,
	"cep" text NOT NULL,
	"rua" text NOT NULL,
	"usuario_id" text NOT NULL,
	"numero" integer NOT NULL,
	"cidade" text NOT NULL,
	"estado" text NOT NULL,
	"complemento" text,
	"bairro" text NOT NULL,
	"pais" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Lista_de_Compras" (
	"id" text PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"usuario_id" text NOT NULL,
	"status" text NOT NULL,
	"id_eventos" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Eventos" (
	"id" text PRIMARY KEY NOT NULL,
	"id_endereco" text NOT NULL,
	"id_vaquinha" text,
	"usuario_id" text NOT NULL,
	"data_inicial" timestamp with time zone NOT NULL,
	"data_final" timestamp with time zone NOT NULL,
	"nome" text NOT NULL,
	"tipo" text NOT NULL,
	"descricao" text NOT NULL,
	"orcamento" text NOT NULL,
	"pix" text NOT NULL,
	"maiorDeIdade" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Eventos_Convidados" (
	"id" text PRIMARY KEY NOT NULL,
	"usuario_id" text NOT NULL,
	"id_evento" text NOT NULL,
	"id_convidados" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Convidados" (
	"id" text PRIMARY KEY NOT NULL,
	"nome" text NOT NULL,
	"idade" integer NOT NULL,
	"contato" text NOT NULL,
	"sexo" char(1) NOT NULL,
	"usuario_id" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "Vaquinha" (
	"id" text PRIMARY KEY NOT NULL,
	"usuario_id" text NOT NULL,
	"meta" text NOT NULL,
	"descricao" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Lista_de_Compras" ADD CONSTRAINT "Lista_de_Compras_id_eventos_Eventos_id_fk" FOREIGN KEY ("id_eventos") REFERENCES "public"."Eventos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_id_endereco_Endereco_id_fk" FOREIGN KEY ("id_endereco") REFERENCES "public"."Endereco"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Eventos" ADD CONSTRAINT "Eventos_id_vaquinha_Vaquinha_id_fk" FOREIGN KEY ("id_vaquinha") REFERENCES "public"."Vaquinha"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Eventos_Convidados" ADD CONSTRAINT "Eventos_Convidados_id_evento_Eventos_id_fk" FOREIGN KEY ("id_evento") REFERENCES "public"."Eventos"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "Eventos_Convidados" ADD CONSTRAINT "Eventos_Convidados_id_convidados_Convidados_id_fk" FOREIGN KEY ("id_convidados") REFERENCES "public"."Convidados"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
