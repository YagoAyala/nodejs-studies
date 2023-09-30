flowchart TD
    A[Inicio] --> B(Soliticação de Manutenção Recebida)
    B --> C{É uma correção urgente ?}
    C -->|Sim| D[Corrigir de Imediato]
    C -->|Não| E[Criar um Ticket para Engenharia]
    D --> F[Testes de Validação]
    F --> G[Testes em Staging]
    G --> H[Liberação para Produtivo]
    E --> I{É prioridade ?}
    I --> |Sim| J[Correção de Imediato]
    J --> K[Testes de Validação]
    K --> L[Testes em Staging]
    L--> M[Liberação para Produtivo]
    I --> |Não| O[Adicionado no BackLog]
    M --> Q[Fim]
    O --> Q[Fim]
    H --> Q[Fim]