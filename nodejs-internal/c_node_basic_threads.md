# Nodejs Basic Threads:


Quando é executado algo em nosso computador/servidor iniciamos um processo. 

Processo é uma instância de um programa de computador que foi executado, em um único processo podemos ter várias Threads.

Thread é uma tarefa que precisa ser executada pelo CPU do seu computador.

A CPU lê as instruções de uma Thread de cima para baixo e vai executando.

### O que é scheduler (escalonador) ? 

É a capacitade de seu sistema operacional decidir qual Thread processar em determinado tempo.

OBS: A CPU tem um limite de processamento de instruções por segundo.

Portanto o OS Scheduler (Operating System scheduler) precisa processar várias instruções de multiplos processos que contém suas thread sem ultrapassar o limite da CPU e dar prioridade para as instruções com mais importância.

Para processar Processos com mais rapidez podemos adicionar mais CPU Core na maquina/servidor, com multiplos Core's é possível processar multiplos Threads ao mesmo tempo.

OBS: É possivel ter várias thread em pararelo em um único Core/Nucleo, é conhecido como Multithreading, existem duas abordagens principais: SMT (Simultaneous Multithreading) e CMT (Coarse-Grained Multithreading).

