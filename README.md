# Tech Stack

## Front:

- Angular
- Tailwind
- CSS

## Back:

- Express
- TypeScript
- PostgreSQL Supabase

# Instrucciones

NO ES OBLIGATORIO CREAR VARIABLES DE ENTORNO.

1. Clonar el repositorio de git
    
    ```powershell
    git clone https://github.com/JuanCamiloMB/TalentoB.git
    ```
    
2. Acceder a la carpeta llamada ‘back’ y en la cmd escribir (usando su package manager de preferencia)
    
    ```powershell
    npm install
    ```
    
    ```powershell
    npm run dev
    ```
    
3. Desde la carpeta raiz del repositorio, acceder a la carpeta llamada ‘front’ y en la cmd escribir (usando su package manager de preferencia)
    
    Si ya tiene Angular 17 ó superior proceda al siguiente paso
    
    ```powershell
    npm install -g @angular/cli@17
    ```
    
4. Instalar las dependencias
    
    ```powershell
    npm install
    ```
    
5. Iniciar el proyecto
    
    ```powershell
    ng serve
    ```
    
6. Acceder desde la URL que AngularCLI proporciona

# Tips

Usuarios ya creados:

```powershell
username: usuario1
email: usuario1@gmail.com
password: 123456
```

```powershell
username: usuario2
email: usuario2@gmail.com
password: 123456
```

# BackEnd env

No es necesario crear .env.

Para conveniencia de la persona que pruebe el proyecto las he escrito en el codigo.

```bash
MYSQL_SCHEMA=postgres
MYSQL_USERNAME=postgres.duuxefhmutyhwjgjcxuq
MYSQL_PASSWORD_=7Ijbix3Sj8ec2EEB
MYSQL_HOST=aws-0-us-west-1.pooler.supabase.com
MYSQL_PORT=6543
```

# FrontEnd env

Si se desea modificar la dirección donde el backend está corriendo ó us puerto, se puede hacer desde src/app/config.ts
